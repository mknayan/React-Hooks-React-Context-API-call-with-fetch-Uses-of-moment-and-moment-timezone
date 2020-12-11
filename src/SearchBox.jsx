/*
 * There are some key problems with the React code below.
 * Assume fetchUserProfile exists elsewhere.
 */
import React, { Suspense, useState, useEffect } from "react";

const SuspensefulUserProfile = ({ userId }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            await fetchUserProfile(userId).then((profile) => setData(profile));
            // setData({ name: 'Zubayer', email: 'zubayer@gmail.com' })
        }
        fetchData()
    }, []);
    return (
        <Suspense>
            <UserProfile data={data} />
        </Suspense>
    );
};
const UserProfile = ({ data }) => {
    return (
        <>
            <h1>{data.name}</h1>
            <h2>{data.email}</h2>
        </>
    );
};
const SearchBox = () => {
    return (
        <>
            <SuspensefulUserProfile userId={1} />
            <SuspensefulUserProfile userId={2} />
            <SuspensefulUserProfile userId={3} />
        </>
    )
};

export default SearchBox;