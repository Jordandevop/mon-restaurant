import { Card } from 'react-bootstrap'

const SidebarBlock = ({ title, children }) => {
  return (
    <Card className="mb-3" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
      {title && (
        <Card.Header className="fw-semibold text-white" style={{ backgroundColor: '#2B2B2B', fontSize: '0.85rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {title}
        </Card.Header>
      )}
      <Card.Body className="p-0">
        {children}
      </Card.Body>
    </Card>
  )
}

export default SidebarBlock
