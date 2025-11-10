import { select } from "framer-motion/client"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPAge: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPAge,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
      className={`${selectedPAge === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
    </AnchorLink>
  )
}

export default Link