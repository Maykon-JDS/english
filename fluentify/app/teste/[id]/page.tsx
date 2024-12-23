export default function Page({ params }: {
    params: { id: string }
}) {
    return <h1>about: {params.id}</h1>;
}