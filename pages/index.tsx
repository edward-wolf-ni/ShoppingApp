import { InferGetServerSidePropsType } from 'next'

import { getProducts } from './api/products'
import { OPTION_CARD } from '../components/GridCard'
import GridCard from '../components/GridCard'

const Home = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (<>
    <h1 className='main-title'>Featured Products</h1>
    <GridCard products={products} option={OPTION_CARD.ADD_TO_CART} />
  </>)
}
export default Home

export async function getServerSideProps() {
  const products = getProducts()
  return {
    props: { products },
  }
}