import React from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {DragDropContext,Droppable,Draggable} from '@hello-pangea/dnd';
// The same DnD engine and two-list interaction used in ddclass OrderStudentMode.
export function createProofBoard(element){
 const root=createRoot(element);
 return props=>flushSync(()=>root.render(<Board {...props}/>));
}
function Board({level,state,onMove,canDrag=()=>true}){
 const locked=state.won||state.locked,construction=level.kind==='construction';
 function finish({draggableId,destination}){document.body.classList.remove('proof-dragging');if(!destination)return;onMove(draggableId,destination.droppableId,destination.index);}
 return <DragDropContext onDragStart={()=>document.body.classList.add('proof-dragging')} onDragEnd={finish} dragHandleUsageInstructions="스페이스로 카드를 집고, 좌우로 영역을 바꾸고 위아래로 순서를 고르세요. 스페이스로 놓기, Escape로 취소합니다.">
 <div className="boards">
 {['order','pool'].map(zone=><section key={zone} id={zone+'-panel'}>
 <h3>{zone==='order'?(construction?'작도 순서':'나의 증명'):'카드 보관함'} <span>{state[zone].length}장</span></h3>
 <p className="board-note">{zone==='order'?(construction?'그리기부터 교점 찾기까지':'근거가 먼저, 결론은 나중에'):'카드 전체를 잡아 왼쪽으로 끌어 주세요'}</p>
 <Droppable droppableId={zone}>{(provided,snapshot)=><div id={zone} data-zone={zone} ref={provided.innerRef} {...provided.droppableProps} className={'card-list'+(snapshot.isDraggingOver?' drag-over':'')}>
 {state[zone].map((id,index)=>{const c=level.cards.find(c=>c.id===id);return <Draggable key={id} draggableId={id} index={index} isDragDisabled={locked||!canDrag(id)}>{(p,s)=><div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps} style={p.draggableProps.style} className={'card'+(s.isDragging?' dragging':'')+(state.feedback?.card===id?' error':'')} data-card={id} data-in={zone} aria-label={'옮길 카드: '+c.text}>
 <span className="card-number" aria-hidden="true">{zone==='order'?index+1:'⠿'}</span><span className="card-text">{c.text}</span>
 {zone==='order'&&<button className="return-card" disabled={locked} onClick={e=>{e.stopPropagation();onMove(id,'pool');}} aria-label={(index+1)+'번째 카드 보관함으로 돌려놓기'}>×</button>}
 </div>}</Draggable>;})}
 {provided.placeholder}
 {state[zone].length===0&&<div className="empty-drop">{zone==='order'?(construction?'여기에 카드를 끌어 놓아 작도 순서를 맞추세요':'여기에 카드를 끌어 놓아 증명을 완성하세요'):'모든 카드를 옮겼어요. 돌려놓을 카드도 여기로 끌어 오세요.'}</div>}
 </div>}</Droppable></section>)}
 </div></DragDropContext>;
}
