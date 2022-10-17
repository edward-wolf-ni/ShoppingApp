import type { NextPage } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { OPTION_CARD } from '../components/Card'
import { IProduct } from '../adapter/product'
import GridCard from '../components/GridCard'

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <GridCard products={products} option={OPTION_CARD.ADD_TO_CART} />
}
export default Home

export async function getServerSideProps() {

  const apiResponse = await fetch(`http://localhost:3000/api/products`)
  if (apiResponse.ok) {
    const products: IProduct[] = await apiResponse.json()
    return {
      props: { products },
    }
  }
}