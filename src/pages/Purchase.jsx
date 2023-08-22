import { useSelector, useDispatch } from 'react-redux';
import { getProducts, deleteOneProduct, addToCart, getOne, getAllCategory } from '../reducers/productSlice';
import { Card, Row, Col, Button, Input, Drawer, Typography } from 'antd';
import { LeftOutlined, RightOutlined, ShoppingCartOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const MakePurchase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, products, loading, error } = useSelector(state => state.products);
  console.log({ products })
  const [quantity, setQuantity] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  console.log({
    selectedCategory,
    setSelectedCategory
  })
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cartItems = useSelector(state => state.products.cartItems);
  const totalItems = cartItems.reduce((total, item) => {
    console.log("🚀 ~ file: Purchase.jsx:26 ~ totalItems ~ item:", item)
    return total + item.quantity
  }, 0);
  const showDrawer = (product) => {
    setSelectedProduct(product);
    setIsDrawerVisible(true);

    dispatch(getOne(product.id));
  };
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const onDetailsClose = () => {
    setIsDetailsVisible(false);

  };
  const handleDeleteClick = (product_id) => {
    dispatch(deleteOneProduct(product_id));
  };
  const onClose = () => {
    setSelectedProduct(null);
    setIsDrawerVisible(false);
  };
  const handleDecreaseCart = (product) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      // dispatch(decreaseCart(product));
    }
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(1);
  };
  const handleIncreaseCart = (product) => {
    setQuantity(quantity + 1);
    // dispatch(increaseCart(product));
  };


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch])


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts = products.filter((product) => {
    const category = product.product_category.toLowerCase();
    const name = product.product_name.toLowerCase();
    return (
      (selectedCategory === 'All' || category === selectedCategory.toLowerCase()) &&
      name.includes(searchValue.toLowerCase())
    );
  });



  return (
    <>
      <Row justify="start" style={{ marginTop: '50px', padding: '0px 20px' }}>
        <Button style={{ background: '#DBDFFD' }}>
          <Link to="/products">
            <LeftOutlined style={{ color: '#1A2163' }} />
          </Link>
        </Button>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: "Poppins", fontWeight: 'bold', marginLeft: '10px', fontSize: '20px', marginTop: '0px' }}>MAKE PURCHASE</p>
      </Row>

      <Row justify="end" style={{ padding: '0px 20px' }}>
        <Col>
          <Link to="/cart" >
            <ShoppingCartOutlined style={{ color: '#5250B4', fontSize: '30px' }} />
            {totalItems}
          </Link>
        </Col>
        <Col>
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearch}
            style={{ width: '100%', maxWidth: '200px', borderRadius: '15px' }}
          />
        </Col>
      </Row>

      <br></br> <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Row justify="center">
          <Button
            key="All"
            type={selectedCategory === "All"}
            onClick={() => handleCategoryClick("All")}
            style={{
              marginRight: "10px",
              borderStyle: "none",
              borderRadius: "50px",
              color: "#A9A9CC",
              font: "Poppins",
              fontWeight: "bold",
              fontSize: "30px",
              height: "50px",
              backgroundColor:
                selectedCategory === "All" ? "#5250B4" : "transparent",
              cursor: "pointer"
            }}
          >
            All
          </Button>
          {categories?.map((product_category) => (
            <Button
              key={product_category}
              type={selectedCategory === product_category}
              onClick={() => handleCategoryClick(product_category)}
              style={{
                marginRight: '10px',
                borderStyle: 'none',
                borderRadius: '50px',
                color: '#A9A9CC',
                font: 'Poppins',
                fontWeight: 'bold',
                fontSize: '30px',
                height: '50px',
                backgroundColor: selectedCategory === product_category ? '#5250B4' : 'transparent',
                cursor: 'pointer',
              }}
            >
              {product_category}
            </Button>
          ))}
        </Row>

        <br></br> <br></br> <br></br>
        <div justify="center" align="middle">
          <Row justify="center">
            {filteredProducts.map((product, key) => (
              <Col xs={24} sm={12} md={8} lg={8} key={key}>
                <Card
                  style={{
                    width: 300,
                    height: 278.33,
                    margin: '10px',
                    borderColor: '#E8E8E8',
                    borderRadius: '20px',
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <img
                      src={(`data:image/jpeg;base64, ${product.buffer_file}`) || "https://picsum.photos/150/150/"}
                      className="img-fluid"
                      width={150}
                      height={150}
                      alt={product.name}
                      style={{ margin: 'auto', cursor: 'pointer' }}
                      onClick={() => showDrawer(product)}
                    />
                  </div>
                  <p style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins', fontSize: '14px' }}>{product.product_name}</p>
                  <p style={{ fontWeight: 'bold', color: '#3B3A82', font: 'Poppins', fontSize: '15px' }}>₱{product.markup_price}</p>
                </Card>
              </Col>
            ))}
            {selectedProduct && (
              <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                open={isDrawerVisible}
                width={300}
                style={{
                  borderRadius: '40px 0px 0px 40px',
                  // Add styles for smaller screens
                  '@media screen and (max-width: 768px)': {
                    width: '30%',
                    borderRadius: 0,
                  },
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                  <img
                    src={(`data:image/jpeg;base64, ${selectedProduct.buffer_file}`) || "https://picsum.photos/280/280/"}
                    className="img-fluid"
                    width={280}
                    height={280}
                    alt={selectedProduct.name}
                    style={{ display: 'block', margin: 'auto' }}
                  />
                  <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: 'Poppins', fontWeight: 'bold', marginLeft: '10px', fontSize: '23px', marginTop: '0px' }}>
                    {selectedProduct.product_name}
                  </p>
                  <br></br>
                  <Button
                    className="btn-arrow"
                    style={{ color: '#9494B2', borderStyle: 'none', fontWeight: 'medium', font: 'Poppins' }}
                    onClick={() => setIsDetailsVisible(true)}
                  >
                    View Details <RightOutlined />
                  </Button>
                  <br></br>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p justify="start" style={{ color: '#30304D', marginRight: '200px', fontWeight: 'bold', font: 'Poppins', fontSize: '20px' }}>Price</p><p style={{ color: '#3B3A82', fontWeight: 'bold', font: 'Poppins', fontSize: '20px' }}>₱{selectedProduct.markup_price}</p>
                  </div>
                  <div justify="end" style={{ display: 'flex', justifyContent: 'center', marginLeft: '220px' }}>
                    <Button className="btn btn-outline-dark" style={{ borderColor: 'gray' }} onClick={() => handleDecreaseCart(selectedProduct)}>
                      -
                    </Button>
                    &nbsp;
                    {quantity} &nbsp;
                    <Button className="btn btn-outline-dark" style={{ borderColor: 'black' }} onClick={() => handleIncreaseCart(selectedProduct)}>
                      +
                    </Button>
                  </div>
                  <br></br>
                  <Button className="btn btn-outline-dark" style={{ borderRadius: '50px', background: '#5250B4', color: '#ffffff', font: 'Poppins', fontWeight: 'bold', height: '55px', width: '205px' }} onClick={() => handleAddToCart(selectedProduct)}>
                    {<ShoppingCartOutlined />} ADD TO CART
                  </Button>
                </div>
              </Drawer>
            )}
            {selectedProduct && (
              <Drawer
                placement="right"
                closable={false}
                onClose={onDetailsClose}
                open={isDetailsVisible}
                width={300}
                style={{
                  borderRadius: '40px 0px 0px 40px',
                  // Add styles for smaller screens
                  '@media screen and (max-width: 768px)': {
                    width: '30%',
                    borderRadius: 0,
                  },
                }}
              >
                {/* New content for the "View Details" drawer */}
                <Row justify="end">
                  <Col>

                    <EditOutlined onClick={() => navigate(`/singleprod/${selectedProduct.product_id}`)} style={{ color: '#9494B2', fontSize: '30px' }} />

                    &nbsp;&nbsp;
                  </Col>
                </Row>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                  <img
                    src={(`data:image/jpeg;base64, ${selectedProduct.buffer_file}`) || "https://picsum.photos/250/250/"}
                    className="img-fluid"
                    width={250}
                    height={250}
                    alt={selectedProduct.name}
                    style={{ display: 'block', margin: 'auto' }}
                  />
                </div>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B3A82', font: 'Poppins', fontWeight: 'bold', marginLeft: '10px', fontSize: '23px', marginTop: '0px' }}>
                  {selectedProduct.product_name}
                </p>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }} >Price</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>₱{selectedProduct.markup_price}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Category</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.product_category}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Variation</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.variation}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Expiration Date</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.expiration_date}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Quantity</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.quantity}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Created At</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.createdAt}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Updated At</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.updatedAt}</Typography.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'regular', color: '#30304D' }}>Updated By</Typography.Text>
                  <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: '#3B3A82' }}>{selectedProduct.updated_by}</Typography.Text>
                </div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button style={{ borderRadius: '50px', borderColor: '#5250B4', color: '#5250B4', font: 'Poppins', fontWeight: 'bold', height: '55px', width: '205px' }} onClick={() => (selectedProduct)}>
                    GENERATE QR CODE
                  </Button>
                  <DeleteOutlined onClick={() => handleDeleteClick(selectedProduct.product_id)} style={{ color: '#9494B2', fontSize: '30px' }} />
                </div>

              </Drawer>
            )}
          </Row>
        </div>

      </div>

    </>
  );
};
export default MakePurchase;