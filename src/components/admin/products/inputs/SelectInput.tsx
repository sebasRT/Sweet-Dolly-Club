import { useFormContext } from 'react-hook-form'
import { Product } from '../modals/utils/model'
import { error } from 'console'

const categories = [
    "Otra",
    "Waffle",
    "Frosty",
    "Malteada",
    "Malteada natural",
    "Frappé",
    "Bebida fría",
    "Bebida caliente"
]

export default function SelectInput() {

  const {register, formState} = useFormContext<Product>()
  const {errors} = formState

  return (
    <div>
        <div className=' flex flex-col items-start'>
            <label htmlFor="category" className='m-1 font-bold'>CATEGORÍA</label>
            <select {...register("category")} className='w-full text-textDarkPrimary focus-visible:outline-none'>
                {categories.map(category => <option key={category}>{category}</option>) }
            </select>

        </div>
        {
            errors.category && 
            <span className="text-textWarning text-xs font-semibold">{errors.category?.message}</span>
        }
    </div>
    )
}
