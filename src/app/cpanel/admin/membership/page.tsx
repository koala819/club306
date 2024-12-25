'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import supabase from 'backend/config/dbConnect'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'

type Member = {
  id: number
  first_name: string
  last_name: string
  email: string
}

export default function Members() {
  const [teamMembers, setTeamMembers] = useState<Member[]>([])
  const [year2023Members, setYear2023Members] = useState<Member[]>([])
  const [year2024Members, setYear2024Members] = useState<Member[]>([])
  const [renewedMembers, setRenewedMembers] = useState<Member[]>([])
  const [nonRenewedMembers, setNonRenewedMembers] = useState<Member[]>([])

  useEffect(() => {
    async function fetchTeamMembers() {
      const { data, error } = await supabase
        .from('members')
        .select('id, first_name, last_name')
        .lt('id', 100)

      if (error) {
        console.error('Error fetching members:', error)
      } else {
        setTeamMembers(data || [])
      }
    }

    async function fetchYear2023Members() {
      const { data, error } = await supabase
        .from('members')
        .select('id, first_name, last_name')
        .gte('id', 100) // Filter for id >= 100
        .filter('created_at', 'gte', '2023-01-01')
        .filter('created_at', 'lt', '2024-01-01')

      if (error) {
        console.error('Error fetching 2023 members:', error)
      } else {
        setYear2023Members(data || []) // Default to empty array if data is null
      }
    }

    async function fetchYear2024Members() {
      // Membres inscrits en 2024
      const { data: year2024Data, error: year2024Error } = await supabase
        .from('members')
        .select('id, first_name, last_name, email')
        .gte('id', 100)
        .filter('created_at', 'gte', '2024-01-01')
        .filter('created_at', 'lt', '2025-01-01')

      // Membres de 2023 ayant renouvelé leur cotisation
      const { data: renewedData, error: renewedError } = await supabase
        .from('members')
        .select('id, first_name, last_name, email')
        .gte('id', 100)
        .filter('created_at', 'gte', '2023-01-01')
        .filter('created_at', 'lt', '2024-01-01')
        .filter('cotisation', 'eq', true)

      // Membres de 2023 n'ayant pas renouvelé leur cotisation
      const { data: nonRenewedData, error: nonRenewedError } = await supabase
        .from('members')
        .select('id, first_name, last_name, email')
        .gte('id', 100)
        .filter('created_at', 'gte', '2023-01-01')
        .filter('created_at', 'lt', '2024-01-01')
        .filter('cotisation', 'eq', false)

      // Vérification des erreurs
      if (year2024Error || renewedError || nonRenewedError) {
        console.error('Error fetching members:', {
          year2024Error,
          renewedError,
          nonRenewedError,
        })
        return
      }

      // Vérification des doublons (protection contre des données incorrectes)
      const total2023Ids = new Set([
        ...(renewedData?.map((m) => m.id) || []),
        ...(nonRenewedData?.map((m) => m.id) || []),
      ])

      // Comparer avec les membres de 2023
      if (
        total2023Ids.size !==
        (renewedData?.length || 0) + (nonRenewedData?.length || 0)
      ) {
        console.warn(
          'Data inconsistency: Some members are counted in both renewed and non-renewed lists',
        )
      }

      // Mise à jour des états
      setYear2024Members(year2024Data || [])
      setRenewedMembers(renewedData || [])
      setNonRenewedMembers(nonRenewedData || [])
    }

    fetchTeamMembers()
    fetchYear2023Members()
    fetchYear2024Members()
  }, [])

  function formatNames(members: Member[]) {
    return members
      .sort((a, b) => a.first_name.localeCompare(b.first_name))
      .map((m) => `${m.first_name} ${m.last_name}`)
      .join(', ')
  }

  function exportMembers() {
    const sections = [
      {
        title: 'Nouveaux membres 2024',
        emails: year2024Members.map((m) => m.email).join(';'),
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

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-lg font-medium mb-4">Liste des Membres</h1>
      <Button onClick={exportMembers} variant="outline" className="mb-4">
        Exporter la Liste
      </Button>
      <Tabs defaultValue="team">
        <TabsList className="mb-4">
          <TabsTrigger value="team">Équipe</TabsTrigger>
          <TabsTrigger value="2023">2023</TabsTrigger>
          <TabsTrigger value="2024">2024</TabsTrigger>
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
            {year2023Members.length} nouveaux membres
          </div>
          <p className="line-clamp-none text-sm leading-relaxed">
            {formatNames(year2023Members)}
          </p>
        </TabsContent>

        <TabsContent value="2024">
          <div className="space-y-6">
            <section>
              <h2 className="text-sm font-medium mb-2">
                Nouveaux membres ({year2024Members.length})
              </h2>
              <p className="line-clamp-none text-sm leading-relaxed">
                {formatNames(year2024Members)}
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
      </Tabs>
    </div>
  )
}
