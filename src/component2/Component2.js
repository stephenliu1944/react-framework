import sharePNG from 'Images/share.png';

export default class Component2 {

    constructor() {}
    
    render() {
        return `
            <div class="component2">
                <img src="${ sharePNG }" />
                <p>
                    Component2
                </p>
            </div>
        `;
    }
}