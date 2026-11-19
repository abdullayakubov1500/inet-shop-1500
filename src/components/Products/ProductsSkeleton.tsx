import ContentLoader from "react-content-loader"

const ProductsSkeleton = () => {
    return (
        <ContentLoader viewBox="0 0 323 248" backgroundColor='#ccc'>
            <rect x="0" y="0" rx="18" ry="18" width="323" height="165" />
            <rect x="13" y="185" rx="4" ry="4" width="100" height="15" />
            <rect x="13" y="218" rx="4" ry="4" width="297" height="11" />
        </ContentLoader>
    )
}

export default ProductsSkeleton