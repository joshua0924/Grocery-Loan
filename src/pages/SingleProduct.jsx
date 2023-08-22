import { Card, Typography, Form, Row, Col, Button } from "antd";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct, getOne } from "../reducers/productSlice";
import TextInput from "../componets/TextInput";
import TextInput2 from "../componets/TextInput2";
import DateInput from "../componets/DateInput";
import moment from 'moment';



const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [variations, setVariations] = useState(['']); // state to store all variations
  const { product } = useSelector(state => state.products);
  const [display, setDispaly] = useState(null);
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
     setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setDispaly(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSquareClick = () => {
    document.getElementById('imageInput').click();
  };


  const addVariation = () => {
    setVariations([...variations, '']); // add an empty string to the variations array
  };
  const handleVariationChange = (index, event) => {
    const newVariations = [...variations]; // create a copy of the variations array
    newVariations[index] = event.target.value; // update the value of the variation at the given index
    setVariations(newVariations); // update the variations state
  };
  const headingStyle = {
    font: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "48px",
    textAlign: "center",
    color: "#30304D",
  };


  //set default values 
  useEffect(() => {
    if (params?.isUpdate) {
      dispatch(getOne(params?.isUpdate));
    }
  }, [dispatch, params, params?.isUpdate]);
  useEffect(() => {

    if (product) {
      form.setFieldsValue({
        image: product.image,
        product_name: product.product_name,
        product_category: product.product_category,
        expiration_date: moment(product.expiration_date),
        quantity: product.quantity,
        original_price: product.original_price,
        markup_price: product.markup_price,
        updated_by: product.updated_by,
        variation: product.variation
        
      })
    }
  }, [form,product])
  return (
    <Card style={{
      width: "950px",
      margin: "0 auto",
      marginTop: '50px',
      marginBottom: '50px',
      height: 'max-content',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      <Form
        form={form}
        onFinish={(value) => {
          const bodyFormData = new FormData();

          const {
            product_name,
            product_category,
            quantity,
            expiration_date,
            original_price,
            markup_price,
            updated_by
            , ...variations } = value;


          if (params.isUpdate) bodyFormData.append('product_id', product.product_id);
          bodyFormData.append('product_name', product_name);
          bodyFormData.append('product_category', product_category);
          bodyFormData.append('quantity', quantity);
          bodyFormData.append('expiration_date', expiration_date);
          bodyFormData.append('original_price', original_price);
          bodyFormData.append('markup_price', markup_price);
          bodyFormData.append('updated_by', updated_by);
          bodyFormData.append('variation', Object.values(variations));
          if (image) bodyFormData.append('image', image);


          if (params?.isUpdate) {
            dispatch(updateProduct(bodyFormData));

          }
          else { dispatch(createProduct(bodyFormData)); }
        }}

      //set default values 
      // initialValues={params?.isUpdate && {
      //   product_name: "product_name",
      //   product_category: "product_category",
      //   quantity: "15",
      //   // expiration_date: new Date("2023-03-28"),
      //   original_price: "12",
      //   markup_price: "15",
      //   updated_by: "updated_by"
      // }}

      >
        <h2 style={headingStyle}>{(params?.isUpdate) ? "UPDATE PRODUCT" : "CREATE NEW PRODUCT"}</h2>
        <Row gutter={16}>
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 30,
            display: 'flex',
            color: '#1A2163',
            marginLeft: '10px'
          }}>Details</Typography.Text>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div style={{ position: 'relative', width: '150px', height: '150px', border: '2px solid #A9A9CC', borderRadius: '5px' }}>
              <img src={display ? display : (`data:image/jpeg;base64, ${product?.buffer_file}`) || "https://picsum.photos/50/50/"} alt="" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '5px' }} />
              {!display && (
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleSquareClick}>
                  <span style={{ fontSize: '24px',color: '#A9A9CC' }}>+</span>
                </div>
              )}
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />

            </div>

          </Col>
          <Col span={12}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
            }}>PRODUCT NAME</Typography.Text>
            < TextInput
              name="product_name"
              placeholder="Product Name"
            />
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
            }}>CATEGORY</Typography.Text>
            < TextInput
              name="product_category"
              placeholder="Product Category"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Typography.Text style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 30,
            display: 'flex',
            color: '#1A2163',
            marginLeft: '10px'
          }}>Variations</Typography.Text>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163'
            }}>QUANTITY</Typography.Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              < TextInput
                name="quantity"
                placeholder="Quantity"
              />
            </div>
          </Col>
          <Col span={12}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
            }}>EXPIRATION DATE</Typography.Text>
            < DateInput
              name="expiration_date"
              placeholder="Expiration Date"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#AC4425'
            }}>ORIGINAL PRICE</Typography.Text>
            < TextInput
              name="original_price"
              placeholder="Original Price"
            />
          </Col>
          <Col span={12}>
            <Typography.Text style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
            }}>MARKUP PRICE</Typography.Text>
            < TextInput
              name="markup_price"
              placeholder="Markup Price"
            />
          </Col>
        </Row>
        <Col span={12}>
          <Typography.Text
            style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 15,
              display: 'flex',
              color: '#1A2163',
            }}
          >
            Updated By
          </Typography.Text>
          < TextInput2
            name="updated_by"
            placeholder="Updated By"
          />
        </Col>
        {variations.map((variation, index) => (
          <Row key={index} gutter={16} style={{ marginBottom: '16px' }}>
            <Col span={12}>
              <Typography.Text
                style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  color: '#1A2163',
                }}
              >
                VARIATION
              </Typography.Text>
              < TextInput2
                name={`variation.${index}`}// variation.0
                placeholder="Variation"
                onChange={(event) => handleVariationChange(index, event)}
              />
            </Col>
          </Row>
        ))}
        <Button style={{
          boxSizing: 'border-box',
          border: '2px solid #A9A9CC',
          borderRadius: '30px',
          height: '50px',
          width: '700px',
          color: '#555566',
          font: 'Poppins',
          fontWeight: 'bold',
          marginLeft: '50px'
        }}
          onClick={addVariation}>
          ADD VARIATION
        </Button>
        <div style={{
          display: 'flex',
          right: 65,
          color: '#3B3A82',
          borderRadius: 50,
        }}>
          <Link to='/products'><Button style={{
            background: '#FFFFFF',
            border: '4px solid #5250B4',
            borderRadius: '50px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: '25px',
            textAlign: 'center',
            color: '#5250B4',
            display: 'block',
            marginTop: '100px',
            marginLeft: '5px',
            marginRight: '535px',
            height: '40px',
            width: '145px'
          }} type="primary">CANCEL</Button></Link>
          <Form.Item>
            <Button style={{
              background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
              borderRadius: '50px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: '25px',
              textAlign: 'center',
              color: '#E8E8E8',
              display: 'block',
              marginTop: '100px',
              marginLeft: '0px',
              height: '40px',
              width: '135px'
            }} type="primary" htmlType="submit">ADD PRODUCT</Button>
          </Form.Item>
        </div>
      </Form>

    </Card >
  );
};
export default SingleProduct;
