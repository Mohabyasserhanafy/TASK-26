import "./Hosting.css"

const Hosting = () => {
    return (
        <div class="hosting-container">
            <h1 class="hosting-heading">Pick your perfect web hosting plan</h1>

            <div class="hosting-grid">

                <div class="hosting-card">
                    <div class="card-content">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 6v6l4 2"></path>
                            </svg>
                        </div>
                        <h3 class="card-title">Maximum Performance</h3>
                        <p class="card-text">Sample text. Click to select the Text Element.</p>
                    </div>
                    <div class="card-arrow">&rarr;</div>
                </div>

                <div class="hosting-card">
                    <div class="card-content">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <rect x="9" y="11" width="6" height="5" rx="1"></rect>
                                <path d="M10 11V9a2 2 0 1 1 4 0v2"></path>
                            </svg>
                        </div>
                        <h3 class="card-title">Fully Secure Data Centers</h3>
                        <p class="card-text">Sample text. Click to select the Text Element.</p>
                    </div>
                    <div class="card-arrow">&rarr;</div>
                </div>

                <div class="hosting-card">
                    <div class="card-content">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="6" rx="2"></rect>
                                <rect x="2" y="10" width="20" height="6" rx="2"></rect>
                                <line x1="6" y1="5" x2="6.01" y2="5"></line>
                                <line x1="6" y1="13" x2="6.01" y2="13"></line>
                                <path d="M14 16v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3"></path>
                                <path d="M16.5 16l2-2 2 2"></path>
                            </svg>
                        </div>
                        <h3 class="card-title">DDoS Attack Prevention</h3>
                        <p class="card-text">Sample text. Click to select the Text Element.</p>
                    </div>
                    <div class="card-arrow">&rarr;</div>
                </div>

                <div class="hosting-card">
                    <div class="card-content">
                        <div class="card-icon">
                            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                                <rect x="9" y="14" width="6" height="4" rx="1"></rect>
                                <circle cx="12" cy="16" r="0.5"></circle>
                                <line x1="12" y1="20" x2="12" y2="22"></line>
                            </svg>
                        </div>
                        <h3 class="card-title">Get Unmetered Bandwidth</h3>
                        <p class="card-text">Sample text. Click to select the Text Element.</p>
                    </div>
                    <div class="card-arrow">&rarr;</div>
                </div>

            </div>
        </div>
    )
}

export default Hosting