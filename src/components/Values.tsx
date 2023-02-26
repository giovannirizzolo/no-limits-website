import React from "react";
import Handshake from "../icons/Handshake";
import Heart from "../icons/Heart";
import Tenacity from "../icons/Tenacity";
import ValueCard from "../icons/ValueCard";

const Values = () => {
    return (
        <section id="values">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:space-x-12 md:flex-row">
                <ValueCard icon={<Handshake />} title="Rispetto" description="La NoLimits si fonda sul rispetto di ogni singolo membro" />
                <ValueCard icon={<Heart />} title="Passione" description="Senza passione non c'è progresso, ti faremo innamorare del processo, così potrai apprezzare ancora di più il risultato" />
                <ValueCard icon={<Tenacity />} title="Tenacia" description="La prima cosa che puoi fare quando cadi, è rialzare la testa" />
            </div>
        </section>
    );
};

export default Values;
