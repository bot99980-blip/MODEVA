import { useState } from "react";
import { Link } from "react-router-dom";
import { Headerdark } from "../components/Headerdark";
import { Footer } from "../components/Footer";
import style from "../styles/search.module.scss";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={style.search}>
      <Headerdark />
      <div className={style.search__container}>
        <div className={style.search__inputSection}>
          <div className={style.search__inputWrapper}>
            <svg
              className={style.search__icon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L12.5 12.5M12.5 12.5C13.75 11.25 14.375 9.375 14.375 7.5C14.375 3.75 11.25 0.625 7.5 0.625C3.75 0.625 0.625 3.75 0.625 7.5C0.625 11.25 3.75 14.375 7.5 14.375C9.375 14.375 11.25 13.75 12.5 12.5Z"
                stroke="#8B4513"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className={style.search__input}
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className={style.search__clear}
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <div className={style.search__section}>
          <div className={style.search__sectionHeader}>
            <h3>RECENT SEARCHES</h3>
          </div>
          <div className={style.search__recentList}>
            {[
              "White T-Shirt",
              "Leather Jacket",
              "Summer Dress",
              "Oversize Hoodie",
            ].map((item, index) => (
              <div
                key={index}
                className={style.search__recentItem}
                onClick={() => setSearchQuery(item)}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 17.5L12.5 12.5M12.5 12.5C13.75 11.25 14.375 9.375 14.375 7.5C14.375 3.75 11.25 0.625 7.5 0.625C3.75 0.625 0.625 3.75 0.625 7.5C0.625 11.25 3.75 14.375 7.5 14.375C9.375 14.375 11.25 13.75 12.5 12.5Z"
                    stroke="#999"
                    strokeWidth="1.2"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={style.search__section}>
          <div className={style.search__sectionHeader}>
            <h3>POPULAR CATEGORIES</h3>
          </div>
          <div className={style.search__categories}>
            {[
              "Woman",
              "Man",
              "Unisex",
              "Dress",
              "Shirt",
              "Jacket",
              "Hoodie",
              "Sweater",
            ].map((category) => (
              <Link
                key={category}
                to={`/catalog?category=${category.toLowerCase()}`}
                className={style.search__categoryTag}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {searchQuery && (
          <div className={style.search__results}>
            <div className={style.search__sectionHeader}>
              <h3>RESULTS FOR "{searchQuery.toUpperCase()}"</h3>
              <span className={style.search__resultsCount}>8 products</span>
            </div>

            <div className={style.search__resultsGrid}>
              <div className={style.search__resultItem}>
                <div className={style.search__resultImage}>
                  <div className={style.search__imagePlaceholder}></div>
                </div>
                <div className={style.search__resultInfo}>
                  <h4>WHITE CASUAL T-SHIRT</h4>
                  <p className={style.search__resultCategory}>Man / T-Shirt</p>
                  <div className={style.search__resultRating}>
                    <span className={style.stars}>★★★★★</span>
                  </div>
                  <p className={style.search__resultPrice}>IDR 100.000</p>
                </div>
              </div>

              <div className={style.search__resultItem}>
                <div className={style.search__resultImage}>
                  <div className={style.search__imagePlaceholder}></div>
                </div>
                <div className={style.search__resultInfo}>
                  <h4>BROWN LEATHER JACKET</h4>
                  <p className={style.search__resultCategory}>Man / Jacket</p>
                  <div className={style.search__resultRating}>
                    <span className={style.stars}>★★★★★</span>
                  </div>
                  <p className={style.search__resultPrice}>IDR 300.000</p>
                </div>
              </div>

              <div className={style.search__resultItem}>
                <div className={style.search__resultImage}>
                  <div className={style.search__imagePlaceholder}></div>
                </div>
                <div className={style.search__resultInfo}>
                  <h4>UNISEX ORANGE SWEATER</h4>
                  <p className={style.search__resultCategory}>
                    Unisex / Sweater
                  </p>
                  <div className={style.search__resultRating}>
                    <span className={style.stars}>★★★★★</span>
                  </div>
                  <p className={style.search__resultPrice}>IDR 300.000</p>
                </div>
              </div>

              <div className={style.search__resultItem}>
                <div className={style.search__resultImage}>
                  <div className={style.search__imagePlaceholder}></div>
                </div>
                <div className={style.search__resultInfo}>
                  <h4>WHITE OVERSIZE COTTON</h4>
                  <p className={style.search__resultCategory}>
                    Unisex / Hoodie
                  </p>
                  <div className={style.search__resultRating}>
                    <span className={style.stars}>★★★★★</span>
                  </div>
                  <p className={style.search__resultPrice}>IDR 300.000</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {searchQuery && (
          <div className={style.search__noResults}>
            <p>No products found for "{searchQuery}"</p>
            <p className={style.search__suggestion}>
              Try searching for something else
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
