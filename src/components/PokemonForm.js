import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPokemon(formData);
    setFormData({ name: "", hp: "", frontUrl: "", backUrl: "" });
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="Front Image URL" 
            placeholder="url" 
            name="frontUrl" 
            value={formData.frontUrl} 
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="Back Image URL" 
            placeholder="url" 
            name="backUrl" 
            value={formData.backUrl} 
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
