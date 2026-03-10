import { Card } from 'react-bootstrap'

const SidebarBlock = ({ title, children }) => {
  return (
    <Card className="mb-3 rounded-0 border">
      {title && (
        <Card.Header className="text-white fw-semibold" style={{ backgroundColor: '#333' }}>
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
