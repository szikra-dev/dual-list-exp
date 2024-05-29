import { useConnectionsStore } from '../store/connections'

export function Footer() {
  const chosen = useConnectionsStore((state) => state.chosen)
  const message = `You have chosen ${chosen.length} connections.\n\n${chosen
    .map((item) => item.name)
    .join(', ')}\n\nDo you want to save?
    `
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p>
        This is just an experiment. Do not mind the styles, neither the
        un-complete functionality.
      </p>
      <button disabled={chosen.length === 0} onClick={() => alert(message)}>
        Save
      </button>
    </footer>
  )
}
