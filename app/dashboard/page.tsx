import FormAdBookmark from "@/components/FormAdBookmark"


const Dashboard = () => {
  return (
    <div className='min-h-[calc(100vh-96px)] flex flex-col items-center justify-start gap-4 p-4'>
      <h1 className='text-xl font-bold'>Dashboard</h1>
      <FormAdBookmark />
    </div>
  )
}

export default Dashboard