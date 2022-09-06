import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Химчистка</Accordion.Header>
        <Accordion.Body>
          <div className="service-accordion">
            <span>Аксессуары</span>
            <span>Верхняя одежда</span>
            <span>Деловой костюм</span>
            <span>Джинса</span>
            <span>Куртка и пуховик</span>
            <span>Пальто и плащ</span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Аквачистка</Accordion.Header>
        <Accordion.Body>
          <div className="service-accordion">
            <span>Деловой костюм</span>
            <span>Верхняя одежда</span>
            <span>Аксессуары</span>
            <span>Джинса</span>
            <span>Куртка и пуховик</span>
            <span>Пальто и плащ</span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Ремонт одежды</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Химчистка</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Аквачистка</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Ремонт одежды</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
