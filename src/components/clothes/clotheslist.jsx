import Clothescard from "./clothescard";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Error from "../error";

function Clotheslist() {
    const [clothes, setClothes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchClothes() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65f03310da8c6584131b1952.mockapi.io/clothes"
                );
                const data = await res.json();
                setClothes(data);
            } catch (e) {
                console.error(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchClothes();
    }, []);

    return (
        <section className="clothes-page">
            <div className="container">
                <div className="row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        clothes.map((clothes) => (
                            <Clothescard clothes={clothes} key={clothes.id} />
                        ))
                    )}
                </div>
                {isError && <Error />}
            </div>
        </section>
    );
}

export default Clotheslist;
