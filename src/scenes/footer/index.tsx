import Logo from "@/assets/logo.png"



const Footer = () => {
  return <footer className="bg-primary-100 py-16">

    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
      <img alt="logo" src={Logo} />
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.
        </p>
        <p>© Evogym All Rights Reserved.</p>
      </div>
      <div className="mt-16 basis-1/2 md:mt-0">
        <h3 className="font-bold">Links</h3>
        <ul className="mt-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="mt-16 basis-1/2 md:mt-0">
        <h3 className="font-bold">Contact</h3>
        <ul className="mt-4">
          <li>123 Fitness Street</li>
          <li>City, State 12345</li>
          <li>(123) 456-7890</li>
        </ul>
      </div>
    </div>
  </footer>
}

export default Footer