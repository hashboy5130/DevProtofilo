import React, { useState } from 'react';
import { articles } from '../data/articlesData';
import { FiCalendar, FiClock, FiSearch, FiChevronRight } from 'react-icons/fi';

const Articles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(articles.map(article => article.category))];

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section id="articles" className="articles-section">
            <div className="container">
                <div className="articles-header">
                    <h2 className="articles-title">
                        📝 <span>Technical Articles</span>
                    </h2>
                    <p className="articles-subtitle">
                        Insights and tutorials on Java, Spring Boot, and modern software development
                    </p>
                </div>

                <div className="articles-search-wrapper">
                    <div className="articles-search">
                        <FiSearch className="articles-search-icon" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="articles-categories">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`articles-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="articles-grid">
                    {filteredArticles.map((article, index) => (
                        <article key={article.id} className="article-item" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="article-icon">
                                {article.status === 'published' ? '📄' : '⏳'}
                            </div>
                            <div className="article-content">
                                <div className="article-meta">
                                    <span className="article-category">{article.category}</span>
                                    <span className="article-date">
                    <FiCalendar size={12} /> {article.date}
                  </span>
                                    {article.status === 'published' && (
                                        <span className="article-readtime">
                      <FiClock size={12} /> {article.readTime}
                    </span>
                                    )}
                                    {article.status === 'coming-soon' && (
                                        <span className="coming-soon-badge">Coming Soon</span>
                                    )}
                                </div>
                                <h3 className="article-heading">{article.title}</h3>
                                <p className="article-excerpt">{article.description}</p>
                                <div className="article-tags-wrapper">
                                    {article.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="article-tag">#{tag}</span>
                                    ))}
                                </div>
                                {article.status === 'published' ? (
                                    <a href={article.link} className="article-readmore" target="_blank" rel="noopener noreferrer">
                                        Read Article <FiChevronRight size={14} />
                                    </a>
                                ) : (
                                    <button className="article-readmore coming-soon" disabled>
                                        Coming Soon <FiChevronRight size={14} />
                                    </button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="articles-empty">
                        <span className="articles-empty-icon">🔍</span>
                        <h3>No articles found</h3>
                        <p>Try different search terms or clear filters</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;