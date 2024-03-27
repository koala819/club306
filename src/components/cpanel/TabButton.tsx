export default function TabButton({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      className={`flex-1 px-2 py-1 rounded mr-2 ${
        isSelected
          ? 'bg-blue-500 text-white cursor-default'
          : 'bg-white hover:bg-blue-100 text-gray-800 hover:text-blue-500 border hover:border-blue-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
