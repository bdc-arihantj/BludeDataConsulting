import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ category, title, description, authorImageUrl, link }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={authorImageUrl} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-shade-4">
            <Link
              to={link}
              className="hover:underline"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              {category}
            </Link>
          </p>
          <Link
            to={link}
            className="mt-2 block"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <p className="text-xl font-bold text-blue-shade-2">{title}</p>
            <p className="mt-2 text-normal text-slate-800">{description}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Article = () => {
  return (
    <div>
      <section className="relative px-6 pt-12 pb-20 lg:px-8 lg:pt-12 lg:pb-20">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-shade-3 lg:text-4xl">
              INSIGHTS
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Blogs, Articles, and Case Studies.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <ArticleCard
              category="Article"
              title="Technology Consulting"
              description="We help organisations accelerate ongoing projects and plan their upcoming projects in the AI, data, automation, and IoT domains. We get involved in mentoring, monitoring, and architecting technology projects."
              author="Roel Aufderehar"
              date="Mar 16, 2020"
              readTime="6 min read"
              link="/article-1"
              authorImageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            />
            <ArticleCard
              category="Blog"
              title="Analytics & AI Solution"
              description="We at Blue Data Digital help organisations by building AI and data engines, integrating silos within the organisations, analysing their business processes, and developing productive solutions."
              author="Brenna Goyette"
              date="Mar 10, 2020"
              readTime="4 min read"
              link="/article-2"
              authorImageUrl="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            />
            <ArticleCard
              category="Case Study"
              title="Scaling Teams"
              description="We help organisations scale up their existing teams by providing the required coaching and training on the relevant tools, technology, approach, and project development methodology."
              author="Daniela Metz"
              date="Feb 12, 2020"
              readTime="11 min read"
              link="/article-3"
              authorImageUrl="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;