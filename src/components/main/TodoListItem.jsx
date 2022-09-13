import React, {useContext, useState} from 'react';
import {  ListGroup, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import {MdOutlineCheckBox,
   MdOutlineCheckBoxOutlineBlank,
    MdDeleteOutline,
    MdEdit,
    MdSave,
    MdCancel
  } from 'react-icons/md'
import AppContext from '../../context/AppContext';

   

const TodoListItem = ({item}) => {
    const [popoverShow, setPopoverShow] = useState(false);
    const [editing, setEditing] = useState(false);
    const [val, setVal] = useState(item.item)
    const {removeItem, toggleDoneItem, editItem} = useContext(AppContext);
    const confirmDelete = () => {
        removeItem(item.id)
        setPopoverShow(false)
    }
    const toggleItem =() => {
        toggleDoneItem(item.id, item.done)
      
    };

    const saveItem = () => {
        editItem(item.id, val);
        setEditing(false);
    }
  return (
    <ListGroup.Item className='d-flex align-items-center' >
          <div className='mb-0 flex-grow-1 d-flex me-5'>
            <input 
                type="text" 
                value={val}
                onChange={(e) => setVal(e.target.value)} 
                className='form-control me-3 form-control-sm'
                disabled={!editing}
             />
             {!editing ? (
                <Button 
                variant='outline-info' 
                size='sm' 
                onClick={() => setEditing(!editing)}
               >
              <MdEdit />
            </Button>
             ) : (
                <>
                <Button 
                variant='outline-primary' 
                size='sm' 
                onClick={saveItem}
               >
              <MdSave />
            </Button>
                    <Button 
                    variant='outline-danger' 
                    size='sm' 
                    onClick={() => {
                        setVal(item.item)
                        setEditing(!editing)}
                    }
                >
                <MdCancel />
                </Button>
        </>
             )}
            
        </div>
          <div className='d-flex gap-1'> 
            <Button 
                variant={item.done ? 'success' : 'secondary'}
                size='sm'
                onClick={toggleItem}
                >
              {item.done ? (
              <MdOutlineCheckBox/>
              ) : (
              <MdOutlineCheckBoxOutlineBlank/>
              )}
            </Button>
            
            
             <OverlayTrigger 
                trigger='click' 
                placement='top' 
                show={popoverShow}
                overlay={
                <Popover id={`delete-popover-${item.id}`
                } >
                    <Popover.Header as='h3'>Are you sure?</Popover.Header>
                    <Popover.Body className='d-flex align-items-center justify-content-between'>
                        <Button 
                            variant='success' 
                            size='sm'
                            onClick={confirmDelete}
                        >
                            Yes
                        </Button>
                        <Button 
                            variant='danger' 
                            size='sm'
                            onClick={() => setPopoverShow(false)}
                        >
                            No
                        </Button>
                    </Popover.Body>
                </Popover>}>
                <Button 
                    variant='danger' 
                    size='sm'
                    onClick={() => setPopoverShow(true)}
                >
                    <MdDeleteOutline />
                </Button>
             </OverlayTrigger>
          </div>
        </ListGroup.Item>
  )
}

export default TodoListItem