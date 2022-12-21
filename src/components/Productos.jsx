import MyCard from './MyCard'

const Productos = () => {
  return (
    <div class="container grid place-items-center md:flex flex-wrap">
        <div class="flex flex-wrap font-[Quicksand] md:w-1/2 p-2 mb-1 grid place-items-center">
        <MyCard/>
        </div>

        <div class="flex flex-wrap font-[Quicksand] md:w-1/2 p-2 mb-1 grid place-items-center">
        <MyCard/>
        </div>
        <div class="flex flex-wrap font-[Quicksand] md:w-1/2 p-2 mb-1 grid place-items-center">
        <MyCard/>
        </div>
        <div class="flex flex-wrap font-[Quicksand] md:w-1/2 p-2 mb-1 grid place-items-center">
        <MyCard/>
        </div>
        <div class="flex flex-wrap font-[Quicksand] md:w-1/2 p-2 mb-1 grid place-items-center">
        <MyCard/>
        </div>
      </div> 
  )
}

export default Productos