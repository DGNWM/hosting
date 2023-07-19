import { Modal } from "@mui/material";
import { useState } from "react";
import { InputTextField } from "components";
import { useDispatch } from "react-redux";
import { setIsFormSubmit } from "Redux/Slices/OrderSlice";

const ModalUi = () => {
  
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(setIsFormSubmit(true))
    
    //storing is form submitted in localstorage
    localStorage.setItem('deliveryFormSubmit','true')
    handleClose() 
  }

  return (
    <>
      <p onClick={handleOpen} className="text-green-500 font-bold text-2xl">
        Add new delivery address
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal w-[90%] lg:w-[700px]">
          <p className="text-2xl font-bold font-primary p-5 lg:ml-[3rem]">
            Add delivery address
          </p>
          <form onSubmit={handleSubmit}>
            <div className="w-full p-5 flex flex-wrap justify-around gap-5">
              <div className="basis-full lg:basis-[40%] flex flex-col gap-5">
                <InputTextField name={"Fullname"} type={"text"} />
                <InputTextField name={"Mobile number"} type={"number"} />
                <InputTextField name={"Address"} type={"text"} />
              </div>
              <div className="basis-full lg:basis-[40%] flex flex-col gap-5 ">
                <InputTextField name={"City"} type={"text"} />
                <InputTextField name={"Area"} type={"text"} />
                <InputTextField name={"Landmark"} type={"text"} />
              </div>
            </div>
            <button type="submit" className="bg-primary px-12 py-4 rounded text-right mt-4 lg:ml-[4.5rem]">Save</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalUi;
