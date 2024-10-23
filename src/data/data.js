const products = [
    {
      id: "Grt223",
      name: "Sabana King",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis soluta dolorem eveniet dolor. Explicabo natus hic, id accusantium placeat eaque voluptatem porro rem et ea, deserunt optio ratione cum.",
      price: 45000,
      stock: 10,
      image: "/public/sabanas-king.jpeg",
      category: "sabanas"
    },
    {
      id: "Grt224",
      name: "Sabana dos plazas",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis soluta dolorem eveniet dolor. Explicabo natus hic, id accusantium placeat eaque voluptatem porro rem et ea, deserunt optio ratione cum.",
      price: 40000,
      stock: 4,
      image: "/public/sabanas-queen.jpeg",
      category: "sabanas"
    },
    {
      id: "Hff556",
      name: "Vaso Stanley 1200ml",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis eos nostrum eum iste voluptate ullam itaque possimus, dolor fugiat id praesentium veniam nisi pariatur sit non eligendi. Ad, veritatis!",
      price: 29000,
      stock: 5,
      image: "/public/vaso-1200ml.jpeg",
      category: "vasos"
    },
    {
      id: "Hff557",
      name: "Vaso Stanley 900ml",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis soluta dolorem eveniet dolor. Explicabo natus hic, id accusantium placeat eaque voluptatem porro rem et ea, deserunt optio ratione cum.",
      price: 25000,
      stock: 17,
      image: "/public/vaso-900ml.jpeg",
      category: "vasos"
    },
    {
      id: "Wre442",
      name: "vaso termico Stanley",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis soluta dolorem eveniet dolor. Explicabo natus hic, id accusantium placeat eaque voluptatem porro rem et ea, deserunt optio ratione cum.",
      price: 21000,
      stock: 2,
      image: "/public/vaso-900ml.jpeg",
      category: "vasos"
    },
    {
      id: "Wre443",
      name: "Set de toallas",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis soluta dolorem eveniet dolor. Explicabo natus hic, id accusantium placeat eaque voluptatem porro rem et ea, deserunt optio ratione cum.",
      price: 30000,
      stock: 6,
      image: "/public/toallas.jpeg",
      category: "toallas"
    },
  ]

  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts }