import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consequatur est fugiat ut pariatur natus, voluptates earum ab rem in nisi corrupti magni molestiae minus similique repellat expedita quis impedit.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}