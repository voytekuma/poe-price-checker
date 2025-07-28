import React from 'react'

interface UniqueItem {
  name: string
  baseType: string
  itemClass: string
  level ?: number
}

function App() {
  const items: UniqueItem[] = [
    {
      name: "Atziri's Disfavour",
      baseType: "Vaal Axe",
      itemClass: "Two Handed Axes",
      level: 68
    },
    {
      name: "Kaom's Heart",
      baseType: "Glorious Plate",
      itemClass: "Body Armours",
      level: 68
    },
    {
      name: "Shaper of Desolation",
      baseType: "Vaal Regalia",
      itemClass: "Body Armours",
      level: 72
    },
    {
      name: "Tabule Rasa",
      baseType: "Simple Robe",
      itemClass: "Body Armours",
      level: 1
    },
    {
      name: "The Baron",
      baseType: "Close Helmet",
      itemClass: "Helmets",
      level: 58
    }
  ]

  return (
    <div className="min-h-screen bg-poe-bg text-poe-text">
      <header className="bg-poe-secondary border-b border-poe-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-poe-accent text-center">
            ⚔️ Path of Exile Unique Items
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-poe-secondary rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-poe-accent">
             📦 ユニークアイテム一覧
            </h2>
            <div className="bg-poe-bg px-3 py-1 rounded-full">
              <span className="text-poe-accent font-mono">
                {items.length} items
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key = {index} className="bg-poe-bg p-4 rounded-lg border border-poe-border hover:border-poe-accent transition-colors duration-200">
                <h3 className="font-bold text-poe-accent text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-1">
                  📋 Base: {item.baseType}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  🔖 Class: {item.itemClass}
                </p>

                {item.level && (
                  <div className="inline-block bg-poe-accent text-poe-bg px-2 py-1 rounded text-xs font-semibold">
                    Lv.{item.level}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App