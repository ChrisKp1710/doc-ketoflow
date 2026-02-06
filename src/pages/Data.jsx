import Mermaid from '../components/Mermaid';

export default function Data() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Data Model Schema</h1>
                <p className="text-xl text-[var(--text-secondary)]">
                    Struttura Entità CoreData e Tabelle Supabase.
                </p>
            </div>

            <div className="card">
                <h2 className="text-2xl mb-4 text-cyan-600 dark:text-cyan-400">Entity Relationship (ERD)</h2>
                <p className="text-[var(--text-secondary)] mb-6">Relazioni tra Utente, Pasti e Dispensa. Tutto è collegato all'User Profile.</p>

                <Mermaid chart={`
                erDiagram
                    USER ||--o{ MEAL : "logs"
                    USER ||--o{ ITEM : "buys"
                    
                    USER {
                        uuid id PK
                        string apple_id UK
                        bool is_premium
                    }
                    
                    MEAL {
                        uuid id PK
                        date created_at
                        string photo_url
                        float carbs
                        bool sync_status
                    }
                    
                    ITEM {
                        uuid id PK
                        string name
                        bool is_checked
                        string barcode
                        bool sync_status
                    }
                `} chartId="data-erd" />
            </div>
        </div>
    );
}
