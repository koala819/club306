import { Button, Card, CardBody, CardFooter, Link } from '@nextui-org/react'
import { Youtube } from 'lucide-react'
import React from 'react'

const YouTubeBanner = () => {
  return (
    <Card isHoverable isPressable className="w-full ">
      <CardBody className="flex items-center p-6 bg-red-600 text-white">
        <Youtube size={24} />
        <div className="ml-4 flex-1">
          <h3 className="mb-2 text-xl font-semibold">
            Nouveau ! Notre chaîne YouTube est en ligne
          </h3>
          <p className="mb-4">
            Découvrez nos vidéos exclusives et abonnez-vous dès maintenant !
          </p>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center">
        <Button
          as={Link}
          href="https://www.youtube.com/@Club306FR"
          target="_blank"
          // variant="ghost"
          rel="noopener noreferrer"
          // color="danger"
          className="text-red-600 hover:text-white border-red-600 hover:border-white border-2 hover:bg-red-600 bg-white"
        >
          <span>Visiter la chaîne</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default YouTubeBanner
