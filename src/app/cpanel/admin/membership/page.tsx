'use client'

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from 'components/ui/alert-dialog'
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from '@heroui/react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'
// import { useToast } from 'hooks/use-toast'
import { toast } from 'react-hot-toast'

import supabase from 'backend/config/dbConnect'

type Member = {
  id: number
  first_name: string
  last_name: string
  email: string
}

type Membership_years = {
  member_id: number
  year?: string
}

export default function Members() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { data: dataSession } = useSession()
  // const { toast } = useToast()

  const [teamMembers, setTeamMembers] = useState<Member[]>([])
  const [members2023, setMembers2023] = useState<Member[]>([])
  const [members2024, setMembers2024] = useState<Member[]>([])
  const [renewedMembers, setRenewedMembers] = useState<Member[]>([])
  const [nonRenewedMembers, setNonRenewedMembers] = useState<Member[]>([])

  // Function to fetch members data (first_name, last_name, email) from members table
  async function fecthMembersData(data: Membership_years[]) {
    const ids = data.map((entry) => entry.member_id)

    const { data: membersData, error: membersError } = await supabase
      .from('members')
      .select('id, first_name, last_name, email')
      .in('id', ids)
    if (membersError) {
      console.error('Error fetching 2023 members:', membersError)
    } else {
      return membersData || []
    }
  }

  useEffect(() => {
    async function fetchTeamMembers() {
      const { data, error } = await supabase
        .from('members')
        .select('id, first_name, last_name, email')
        .lt('id', 100)

      if (error) {
        console.error('Error fetching members:', error)
      } else {
        setTeamMembers(data)
      }
    }

    async function fetchYear2023Members() {
      const { data, error } = await supabase
        .from('membership_years')
        .select('member_id')
        .filter('year', 'eq', '2023')
      if (error) {
        console.error('Error fetching 2023 members:', error)
      } else {
        const memberinfo = await fecthMembersData(data)
        setMembers2023(memberinfo || [])
      }
    }

    fetchTeamMembers()
    fetchYear2023Members()
  }, [])

  // Récupérer les membres pour l'année 2024
  async function fetchYear2024Members() {
    const { data, error } = await supabase
      .from('membership_years')
      .select('member_id')

      .filter('year', 'eq', '2024')

    if (error) {
      console.error('Error fetching 2024 membership ids:', error)
      return
    }
    if (members2023.length > 0) {
      const members2024Id = data.map((entry) => entry.member_id)

      // Filtrer les membres 2023 renouvelés et non renouvelés
      const renewedMembers = members2023.filter((member) =>
        members2024Id.includes(member.id),
      )
      setRenewedMembers(renewedMembers || [])

      const nonRenewedMembers = members2023.filter(
        (member) => !members2024Id.includes(member.id),
      )
      setNonRenewedMembers(nonRenewedMembers || [])

      // Obtenir les données des membres inscrits en 2024
      const { data: year2024MembersData, error: membersError } = await supabase
        .from('members')
        .select('id, first_name, last_name, email')
        .in(
          'id',
          members2024Id.filter(
            (id) => !members2023.map((member) => member.id).includes(id),
          ),
        )

      if (membersError) {
        console.error('Error fetching 2024 membership ids:', error)
        return
      }
      setMembers2024(year2024MembersData || [])
    }
  }

  // Function to format the names of the members in a list
  function formatNames(members: Member[]) {
    return members
      .sort((a, b) => a.first_name.localeCompare(b.first_name))
      .map((m) => `${m.first_name} ${m.last_name}`)
      .join(', ')
  }

  // Function to export the members to a text file
  function exportMembers() {
    const sections = [
      {
        title: 'Nouveaux membres 2024',
        emails: members2024.map((m) => m.email).join(';'),
      },
      {
        title: 'Renouvellements 2023-2024',
        emails: renewedMembers.map((m) => m.email).join(';'),
      },
      {
        title: 'Non renouvelés 2023-2024',
        emails: nonRenewedMembers.map((m) => m.email).join(';'),
      },
    ]

    const txtContent = sections
      .map(({ title, emails }) => `${title}\n${emails}`)
      .join('\n\n')

    const encodedUri = encodeURI('data:text/plain;charset=utf-8,' + txtContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'membres.txt')
    document.body.appendChild(link)

    link.click()
  }

  // Fonction pour initialiser otus les comptes à false pour la cotisation
  async function createNewYear() {
    try {
      //  Récupérer les membres actifs
      const { data: activeMembers, error } = await supabase
        .from('members')
        .select('id')
        .gte('id', 100)
        .eq('cotisation', true)

      if (error) {
        console.error('Error fetching new year members:', error)
        toast.error(
          `Une erreur s'est produite lors de la récupération des membres : ${error.message}`,
        )
        return
        // return toast({
        //   variant: 'destructive',
        //   title: 'Erreur',
        //   description: `Une erreur s'est produite lors de la récupération des membres : ${error.message}`,
        //   duration: 3000,
        // })
      }

      if (activeMembers.length > 0) {
        // Mettre à jour la cotisation à false pour tous
        const { data: updateData, error: updateError } = await supabase
          .from('members')
          .update({ cotisation: false })
          .gte('id', 100)

        if (updateError) {
          console.error('Error updating cotisation:', updateError)
          toast.error(
            `Une erreur s'est produite lors de la récupération des membres : ${updateError.message}`,
          )
          return
          // return toast({
          //   variant: 'destructive',
          //   title: 'Erreur',
          //   description: `Une erreur s'est produite lors de la mise à jour des cotisations : ${updateError.message}`,
          //   duration: 3000,
          // })
        }

        console.log('Cotisations mises à jour:', updateData)
        toast.success(
          'Les cotisations ont été mises à jour et les membres ont été ajoutés pour 2024',
        )
        // toast({
        //   variant: 'success',
        //   title: 'Nouvelle année créée',
        //   description:
        //     'Les cotisations ont été mises à jour et les membres ont été ajoutés pour 2024.',
        //   duration: 3000,
        // })
      } else {
        toast.error('Aucun membre actif')
        // toast({
        //   variant: 'default',
        //   title: 'Aucun membre actif',
        //   description:
        //     'Aucun membre actif n’a été trouvé pour la nouvelle année.',
        //   duration: 3000,
        // })
      }
    } catch (err) {
      console.error('Unexpected error:', err)
    }
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-lg font-medium mb-4">Liste des Membres</h1>
      <div className="flex justify-between mb-4">
        <Button onClick={exportMembers} variant="bordered">
          Exporter la Liste
        </Button>
        {(dataSession?.user?.email === 'contact@dix31.com' ||
          dataSession?.user?.email === 'pbesnard99@gmail.com') && (
          <>
            <Button onPress={onOpen}>Nouvelle Année</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Confirmation
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Êtes-vous sûr de vouloir mettre toutes les cotisations à
                        false ?
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Non
                      </Button>
                      <Button
                        color="primary"
                        onPress={onClose}
                        onClick={createNewYear}
                      >
                        Oui
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        )}
      </div>
      TABS
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="equipe" title="Équipe">
            <Card>
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {teamMembers
                    .filter((member) => member.id !== 18) // Exclude member with id 18
                    .sort((a, b) => a.first_name.localeCompare(b.first_name)) // Sort alphabetically by first name
                    .map((member) => (
                      <div
                        key={member.id}
                        className="p-4 border rounded-lg shadow hover:shadow-lg bg-white"
                      >
                        <h2 className="text-lg font-semibold">
                          {member.first_name} {member.last_name}
                        </h2>
                      </div>
                    ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="2023" title="2023">
            <Card>
              <CardBody>
                <div className="text-sm text-gray-500 mb-2">
                  {members2023.length} nouveaux membres
                </div>
                <p className="line-clamp-none text-sm leading-relaxed">
                  {formatNames(members2023)}
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="2024" title="2024" onClick={fetchYear2024Members}>
            <Card>
              <CardBody>
                <div className="space-y-6">
                  <section>
                    <h2 className="text-sm font-medium mb-2">
                      Nouveaux membres ({members2024.length})
                    </h2>
                    <p className="line-clamp-none text-sm leading-relaxed">
                      {formatNames(members2024)}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-sm font-medium mb-2">
                      Renouvellements ({renewedMembers.length})
                    </h2>
                    <p className="line-clamp-none text-sm leading-relaxed">
                      {formatNames(renewedMembers)}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-sm font-medium mb-2">
                      Non renouvelés ({nonRenewedMembers.length})
                    </h2>
                    <p className="line-clamp-none text-sm leading-relaxed">
                      {formatNames(nonRenewedMembers)}
                    </p>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      {/* <Tabs defaultValue="team">
        <TabsList className="mb-4">
          <TabsTrigger value="team">Équipe</TabsTrigger>
          <TabsTrigger value="2023">2023</TabsTrigger>
          <TabsTrigger value="2024" onClick={fetchYear2024Members}>
            2024
          </TabsTrigger>
        </TabsList>

        <TabsContent value="team">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teamMembers
              .filter((member) => member.id !== 18) // Exclude member with id 18
              .sort((a, b) => a.first_name.localeCompare(b.first_name)) // Sort alphabetically by first name
              .map((member) => (
                <div
                  key={member.id}
                  className="p-4 border rounded-lg shadow hover:shadow-lg bg-white"
                >
                  <h2 className="text-lg font-semibold">
                    {member.first_name} {member.last_name}
                  </h2>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="2023">
          <div className="text-sm text-gray-500 mb-2">
            {members2023.length} nouveaux membres
          </div>
          <p className="line-clamp-none text-sm leading-relaxed">
            {formatNames(members2023)}
          </p>
        </TabsContent>

        <TabsContent value="2024">
          <div className="space-y-6">
            <section>
              <h2 className="text-sm font-medium mb-2">
                Nouveaux membres ({members2024.length})
              </h2>
              <p className="line-clamp-none text-sm leading-relaxed">
                {formatNames(members2024)}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-medium mb-2">
                Renouvellements ({renewedMembers.length})
              </h2>
              <p className="line-clamp-none text-sm leading-relaxed">
                {formatNames(renewedMembers)}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-medium mb-2">
                Non renouvelés ({nonRenewedMembers.length})
              </h2>
              <p className="line-clamp-none text-sm leading-relaxed">
                {formatNames(nonRenewedMembers)}
              </p>
            </section>
          </div>
        </TabsContent>
      </Tabs> */}
    </div>
  )
}
