import React,{useState} from 'react'

function TestimonialsSection (){
    const [testimonials,setTestimonials] = useState([]);
 const [newTestimonial,setNewTestimonial] = useState('');

 function handleAddTestimonial(){
    if(newTestimonial.trim() !== ''){
        setTestimonials([...testimonials,newTestimonial]);
        setNewTestimonial('');
    }
 };

 return(
    <div className='reviews'>
        <h3>Reviews</h3>
        <div>
            <textarea value={newTestimonial} onChange={(e) => setNewTestimonial(e.target.value)} placeholder='Give me your honest opinion' rows="4" cols="50"/>
            <button onClick= {handleAddTestimonial}>Add Review</button>
        </div>
        <ul className='review-list'>
            {testimonials.map((testimonial,index)=>(
                <li key= {index}> {testimonial}</li>
            ))}
        </ul>
    </div>

 );
}

export default TestimonialsSection