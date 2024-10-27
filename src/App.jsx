import Header from "./_components/_core-components/header/header.jsx";
import ProductsPage from "./contains/pages/products-page/products-page.jsx";
function App() {

  return (
      <main>
          <Header/>
          <div className="container">
              <ProductsPage/>
          </div>
      </main>
  )
}

export default App
