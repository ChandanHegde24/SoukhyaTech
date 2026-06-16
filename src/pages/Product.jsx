import React from 'react';
import { product } from '../data/siteContent';

const Product = () => {
  return (
    <div className="page-shell product-page">
      <section className="page-hero">
        <p>Product</p>
        <h1>{product.title}</h1>
        <span>{product.subtitle}</span>
      </section>

      <section className="page-split">
        <article className="page-panel product-summary">
          <h2>Earth pit intelligence</h2>
          <p>{product.description}</p>
        </article>

        <article className="page-panel">
          <h2>Benefits</h2>
          <ul className="benefit-list">
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Product;
