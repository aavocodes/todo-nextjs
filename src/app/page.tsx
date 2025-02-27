import { roboto } from "./ui/font";

export default function Home() {
  return (
    <div className={`${roboto.className} w-screen py-20 flex justify-center flex-col items-center bg-primary-900`}>
      <span className='text-4xl font-extrabold uppercase'>Next Todo App</span>
      <h1 className='text-5xl font-extrabold mb-5 text-center'>
        <span className='lowercase'>w/</span> SERVER ACTIONS
      </h1>
    </div>
  );
}
