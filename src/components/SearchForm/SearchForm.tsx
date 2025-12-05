
interface SearchFormProps {
    onSearch: (topic: string) => void;
}
export default function SearchForm({onSearch}: SearchFormProps) {

    const handleSubmit = (formData: FormData) => {
        const topic = formData.get("topic") as string;
        console.log(topic);
        onSearch(topic)
        

    }
    return (
        <form action={handleSubmit}>
            <input type="text" name="topic"/>
            <button type="submit">Swarch</button>
        </form>
    )
}