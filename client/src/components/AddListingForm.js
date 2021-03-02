import React from "react";

const AddListingForm = () => {
    return (
        <div>
            <h3>Add a Listing</h3>
            <form>
                <label>
                    Name
                    <input name="name"></input>
                </label>
                <label>
                    Color
                    <input name="color"></input>
                </label>
                <label>
                    Size
                    <input name="size"></input>
                </label>
                <label>
                    Amount
                    <input name="amount"></input>
                </label>
                <label>
                    Cost
                    <input name="cost"></input>
                </label>
                <button type="submit">Add Listing</button>

            </form>
        </div>
        
    )
}

export { AddListingForm };