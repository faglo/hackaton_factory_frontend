import React from 'react'
import KanbanColumn from './KanbanColumn'
import KanbanCard from './KanbanCard'
import { DndContext } from '@dnd-kit/core'

export default function KanbanTable () {
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      console.log('Dragged', active.id, 'over', over.id)
    }
  }
  const mockDataCards = [
    {
      id: 1,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000'
    },
    {
      id: 2,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000'
    },
    {
      id: 3,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000'
    },
    {
      id: 4,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000'
    },
    {
      id: 5,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000'
    }
  ]
  const mockDataCols = [
    {
      name: 'На согласовании',
      count: 4,
      color: '#7B61FF'
    },
    {
      name: 'Согласован',
      count: 4,
      color: '#4CE465'
    },
    {
      name: 'Аннулирован',
      count: 4,
      color: '#EB4335'
    }
  ]
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '20px'
    }}>
      <DndContext onDragEnd={handleDragEnd}>
        {
          mockDataCols.map((item, index) =>
            <KanbanColumn
              id={`droppable${index}`}
              name={item.name}
              count={item.count}
              color={item.color}
              key={index}
            >
              {
                mockDataCards.map((card, index) =>
                  <KanbanCard
                    id={`draggable${index}`}
                    name={card.name}
                    company={card.company}
                    did={card.did}
                    price={card.price}
                    date={card.date}
                    stars={card.stars}
                    pricePerUnit={card.pricePerUnit}
                    key={index}
                  />
                )
              }
            </KanbanColumn>
          )
        }
      </DndContext>
    </div>
  )
}
