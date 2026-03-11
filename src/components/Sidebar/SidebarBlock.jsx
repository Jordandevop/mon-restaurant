import { Card } from 'react-bootstrap'

const SidebarBlock = ({ title, children }) => {
  return (
    <Card className="mb-3 border-0 shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
      {title && (
        <Card.Header className="fw-semibold text-white" style={{ backgroundColor: 'var(--brand)', fontSize: '0.85rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
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
