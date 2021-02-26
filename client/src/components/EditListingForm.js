import React from "react";

const EditListingForm = () => {
    return (
        <div>
            <h3>Edit a Listing</h3>
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
            </form>
        </div>
        
    )
}

export { EditListingForm };