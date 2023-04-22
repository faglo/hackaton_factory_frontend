import React from 'react'
import KanbanColumn from './KanbanColumn'
import KanbanCard from './KanbanCard'
import { DndContext } from '@dnd-kit/core'

export default function KanbanTable () {
  const mock = [
    {
      id: 1,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 1
    },
    {
      id: 2,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 1
    },
    {
      id: 3,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 2
    },
    {
      id: 4,
      name: 'Балки. Тендер №12',
      company: 'ООО “Дорстрой”',
      did: '12344567',
      price: '520 тыс.',
      date: '21.04',
      stars: 2,
      pricePerUnit: '1000',
      columnID: 3
    }
  ]
  const [mockDataCards, setMockDataCards] = React.useState(mock)
  const mockDataCols = [
    {
      id: 1,
      name: 'На согласовании',
      count: 4,
      color: '#7B61FF'
    },
    {
      id: 2,
      name: 'Согласован',
      count: 4,
      color: '#4CE465'
    },
    {
      id: 3,
      name: 'Аннулирован',
      count: 4,
      color: '#EB4335'
    }
  ]

  const handleDragEnd = (result) => {
    const { active, over } = result
    console.log(active, over)
    if (!over) {
      console.log('no over')
      return
    }
    const cardInfo = mockDataCards.find((deal) => deal.id === parseInt(active.id, 10))
    const { oldStatusID, newStatusID } = { oldStatusID: cardInfo.status, newStatusID: parseInt(over.id, 10) }

    if (oldStatusID === newStatusID) { return }
    const nextDeals = mockDataCards.map(d => {
      if (d !== cardInfo) {
        return d
      }
      return {
        ...d,
        columnID: newStatusID
      }
    })
    setMockDataCards(nextDeals)
  }
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
              id={item.id}
              name={item.name}
              count={item.count}
              color={item.color}
              key={index}
            >
              {
                mockDataCards.filter((val) => val.columnID === item.id).map((card, index) =>
                  <KanbanCard
                    id={card.id}
                    name={card.name}
                    company={card.company}
                    did={card.did}
                    price={card.price}
                    date={card.date}
                    stars={card.stars}
                    pricePerUnit={card.pricePerUnit}
                    key={index}
                    colID={card.columnID}
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
