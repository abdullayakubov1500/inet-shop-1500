import ContentLoader from 'react-content-loader'

const UserSkeleton = () => {
    return (
        <ContentLoader viewBox="0 0 190 360" backgroundColor='#ccc'>
            <circle cx="45" cy="45" r="45" />
            <rect x="0" y="121" rx="4" ry="4" width="185" height="14" />
            <rect x="0" y="146" rx="2" ry="2" width="105" height="7" />
            <rect x="0" y="205" rx="4" ry="4" width="107" height="19" />
            <rect x="0" y="263" rx="4" ry="4" width="107" height="19" />
            <rect x="0" y="322" rx="4" ry="4" width="107" height="19" />
        </ContentLoader>
    )
}

export default UserSkeleton