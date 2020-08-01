export class Dom {
    positions;
    upperPositions;
    lowerPositions;

    constructor(allPositions) {
        this.positions = allPositions;
    }

    display(upperParentElement, lowerParentElement, currentPrice) {
        //split data into 2 lists
        this.upperPositions = Object.keys(this.positions).filter(position => parseFloat(position) > currentPrice);
        this.lowerPositions = Object.keys(this.positions).filter(position => parseFloat(position) < currentPrice);
        this.upperPositions = this.upperPositions.sort( (a,b) => a-b ).slice(0, 10);
        this.lowerPositions = this.lowerPositions.sort( (a,b) => b-a ).slice(0, 10);
        upperParentElement.innerHTML = "";
        lowerParentElement.innerHTML = "";

        if (this.upperPositions.length) {
            this.upperPositions.forEach(position => {
                //create a span, add 2 text rags
                const span = document.createElement('div');
                span.className = "hor-div";
                const price = document.createElement('p');

                price.className = "better-item dom-item text-center";
                price.innerText = `${position}`;

                const volume = document.createElement('p');
                volume.className = "better-item dom-item text-center";
                volume.innerText = `${this.positions[position]}`;

                //append the elements
                span.appendChild(price);
                span.appendChild(volume);
                upperParentElement.appendChild(span);

            });
        }

        if (this.lowerPositions.length) {
            this.lowerPositions.forEach(position => {
                //create a span, add 2 text rags
                const span = document.createElement('div');
                span.className = "hor-div";
                const price = document.createElement('p');

                price.className = "better-item dom-item";
                price.innerText = `${position}`;

                const volume = document.createElement('p');
                volume.className = "better-item dom-item";
                volume.innerText = `${this.positions[position]}`;

                //append the elements
                span.appendChild(price);
                span.appendChild(volume);
                lowerParentElement.appendChild(span);

            });
        }


    }
}