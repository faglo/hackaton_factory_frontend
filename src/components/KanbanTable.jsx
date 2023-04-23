import React, {useEffect} from 'react'
import KanbanColumn from './KanbanColumn'
import KanbanCard from './KanbanCard'
import {DndContext} from '@dnd-kit/core'
import {getColumnsByFunnelId, getTasksByColumnId, moveTask} from '../../API/kanban.js'

export default function KanbanTable() {

    const [mockDataCols, setMockDataCols] = React.useState({})
    const [mockDataCards, setMockDataCards] = React.useState({})

    useEffect((id) => {
        const columns = getColumnsByFunnelId(id)
        console.log(columns)
        // TODO Change colors
        columns.map((item) => {
            item.color = '#7B61FF'
        })
        setMockDataCols(columns)
        columns.map((item) => {
            const cards = getTasksByColumnId(item.id)
            setMockDataCards([...mockDataCards, ...cards])
        })
    }, [])

    const handleDragEnd = (result) => {
        const {active, over} = result
        console.log(active, over)
        if (!over) {
            console.log('no over')
            return
        }
        const cardInfo = mockDataCards.find((deal) => deal.id === parseInt(active.id, 10))
        const {oldStatusID, newStatusID} = {oldStatusID: cardInfo.status, newStatusID: parseInt(over.id, 10)}

        if (oldStatusID === newStatusID) {
            return
        }
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
                            name={item.title}
                            count={item.count}
                            color={item.color}
                            key={index}
                        >
                            {
                                mockDataCards.filter((val) => val.columnID === item.id).map((card, index) =>
                                    <KanbanCard
                                        id={card.id}
                                        name={card.title}
                                        company={card.company}
                                        did={card.did}
                                        price={card.price}
                                        date={card.date}
                                        stars={card.stars}
                                        pricePerUnit={card.price_per_unit}
                                        key={index}
                                        colID={card.column_id}
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
