'use client'

import { Button } from "@heroui/react"

export default function CalendarControlPanel({
  year,
  canGoBack,
  canGoNext,
  handleAddNewYear,
  goToNextYear,
  goToPreviousYear,
}: {
  year: number
  canGoBack: boolean
  canGoNext: boolean
  handleAddNewYear: () => void
  goToNextYear: () => void
  goToPreviousYear: () => void
}) {
  return (
    <>
      <div className="text-center p-5 text-3xl font-black">
        {canGoBack && <Button onClick={goToPreviousYear}>Précédent</Button>}
        <span>{year}</span>
        {canGoNext && <Button onClick={goToNextYear}>Suivant</Button>}
      </div>
      <div className="text-right mb-12">
        {year + 1 === new Date().getFullYear() + 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
            onClick={handleAddNewYear}
          >
            Créer année {year + 1}
          </button>
        )}
      </div>
    </>
  )
}
