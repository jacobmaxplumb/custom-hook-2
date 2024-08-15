import { useEffect, useState } from "react"

export const useFormAndList = (initialFormValues, key) => {
    const [items, setItems] = useState(() => {
        if (localStorage.getItem(`${key}-list`)) return JSON.parse(localStorage.getItem(`${key}-list`));
        return [];
    });
    const [formValues, setFormValues] = useState(() => {
        if (localStorage.getItem(`${key}-form`)) return JSON.parse(localStorage.getItem(`${key}-form`));
        return initialFormValues;
    })

    const addItem = () => {
        const item = {id: Date.now(), ...formValues};
        setItems([...items, item]);
        setFormValues(initialFormValues);
    }

    const deleteItem = (id) => {
        setItems(items.filter(i => i.id !== id));
    }

    const handleFormValueChanges = (e) => {
        const {name, value, type, checked} = e.target;
        if (type === 'checkbox') {
            if (checked) setFormValues({...formValues, [name]: [...formValues[name], value]})
            else setFormValues({...formValues, [name]: formValues[name].filter(i => i !== value)})
        } else {
            setFormValues({...formValues, [name]: value})
        }
    }

    useEffect(() => {
        localStorage.setItem(`${key}-form`, JSON.stringify(formValues))
    }, [formValues])

    useEffect(() => {
        localStorage.setItem(`${key}-list`, JSON.stringify(items))
    }, [items])

    return [items, formValues, addItem, handleFormValueChanges, deleteItem, setFormValues]

}