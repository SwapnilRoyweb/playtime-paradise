import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog');
    
    return (
        <div className='mx-10 my-10 flex flex-col gap-10'>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-purple-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-purple-300">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content my-5">
                    <p> An access token and a refresh token are both commonly used in authentication and authorization mechanisms, particularly in the context of web applications and APIs. <br />
                        <strong>Access Token:</strong> An access token is a credential that is used to access protected resources on an API server. It is typically a string of characters that represents the authentication of a user or client application. The access token is usually issued by an authorization server after a successful authentication process. <br />
                        <strong>Refresh Token:</strong> A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is also issued by the authorization server during the authentication process, along with the access token. The refresh token is stored securely by the client application and is used to request a new access token when needed, without requiring the user to reauthenticate. <br />
                        It works this format: <br />
                        <strong>Authentication:</strong> The user or client application sends their credentials (such as username and password) to the authentication server. <br />

                        <strong>Authorization Grant:</strong> If the credentials are valid, the authentication server issues both an access token and a refresh token to the client application. <br />

                        <strong>Accessing Protected Resources:</strong> The client application includes the access token in each request to the API server to access protected resources. The API server validates the access token to ensure the request is authorized. <br />

                        <strong>Token Expiration:</strong> Access tokens have a limited lifespan, after which they expire. This is done for security reasons and to mitigate the impact of compromised tokens. Once the access token expires, the client application needs to obtain a new one to continue accessing protected resources. <br />

                        <strong>Token Refresh:</strong> To obtain a new access token, the client application sends the refresh token to the authorization server. If the refresh token is valid and has not expired, the authorization server issues a new access token. The refresh token is usually kept securely on the client side. <br />

                        We should store them in client side like this and with common practices: <br />

                        <strong>Web Applications:</strong> Store tokens in an HTTP-only cookie with the secure and SameSite attributes, or use the browser's Web Storage (localStorage or sessionStorage) with appropriate security measures. <br />

                        <strong>Mobile Applications:</strong> Store tokens in secure storage options provided by the mobile platform, such as Keychain (iOS) or KeyStore (Android). <br />

                        <strong>Desktop Applications:</strong> Store tokens in a secure storage mechanism, such as the operating system's keychain or encrypted configuration files.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-purple-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-purple-300">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content my-5">
                    <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems that serve different purposes. <br />
                    The choice between SQL and NoSQL databases depends on the specific requirements of your application. <br />
                    <strong>SQL</strong> databases are a good fit for structured data with complex relationships and ACID guarantees. <br />
                    <strong>NoSQL</strong> databases are suitable for handling large volumes of unstructured or rapidly changing data with high scalability requirements.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-purple-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-purple-300">
                    What is express js? What is Next JS?
                </div>
                <div className="collapse-content my-5">
                    <p>Express.js and Next.js are both popular web development frameworks that are used to build server-side applications. <br />
                    <strong>Express.js</strong> is a minimalistic and flexible web application framework for Node.js. It provides a set of features and utilities that simplify the development of web applications and APIs. <br />
                    <strong>Next.js</strong> is a React-based framework for building server-rendered and statically generated web applications. It adds powerful features to React, making it easier to build complex web applications with server-side rendering. <br />
                    Both Express.js and Next.js have their strengths and are suitable for different use cases. Express.js is commonly used for building lightweight, flexible, and API-centric applications, while Next.js excels in building server-rendered or statically generated React applications with enhanced performance and SEO capabilities.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-purple-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-purple-300">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content my-5">
                    <p>In MongoDB, the <strong>aggregate</strong> method is used to perform advanced data aggregation operations on collections. It provides a flexible and powerful way to process and transform data within the database. The aggregate method allows you to perform various operations like filtering, grouping, sorting, projecting, and calculating aggregate values.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;