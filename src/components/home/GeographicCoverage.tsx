import React from "react";
import { MapPin, Clock, Truck, Globe } from "lucide-react";

const GeographicCoverage = () => {
  const coverageAreas = [
    {
      city: "Freetown",
      status: "Active",
      deliveryTime: "30-45 min",
      vendors: 250,
      color: "bg-green-500",
    },
    {
      city: "Bo",
      status: "Active",
      deliveryTime: "45-60 min",
      vendors: 85,
      color: "bg-green-500",
    },
    {
      city: "Kenema",
      status: "Active",
      deliveryTime: "45-60 min",
      vendors: 65,
      color: "bg-green-500",
    },
    {
      city: "Makeni",
      status: "Coming Soon",
      deliveryTime: "Q2 2024",
      vendors: 0,
      color: "bg-orange-500",
    },
    {
      city: "Koidu",
      status: "Coming Soon",
      deliveryTime: "Q3 2024",
      vendors: 0,
      color: "bg-orange-500",
    },
    {
      city: "Port Loko",
      status: "Coming Soon",
      deliveryTime: "Q3 2024",
      vendors: 0,
      color: "bg-orange-500",
    },
  ];

  const expansionPlans = [
    {
      phase: "Phase 1",
      timeline: "2024 Q1-Q2",
      regions: ["Northern Province", "Eastern Province"],
      description:
        "Expanding to major cities in Northern and Eastern provinces",
    },
    {
      phase: "Phase 2",
      timeline: "2024 Q3-Q4",
      regions: ["Rural Areas", "Mining Communities"],
      description:
        "Reaching rural communities and mining areas across Sierra Leone",
    },
    {
      phase: "Phase 3",
      timeline: "2025",
      regions: ["Guinea", "Liberia"],
      description:
        "Cross-border expansion to neighboring West African countries",
    },
  ];

  return (
    <section id="coverage" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Connecting{" "}
            <span className="text-gradient">All of Sierra Leone</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            From Freetown to the provinces, we're building a network that
            reaches every community
          </p>
        </div>

        {/* Current Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Simplified Sierra Leone Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <svg
                      width="300"
                      height="200"
                      viewBox="0 0 300 200"
                      className="text-green-800"
                    >
                      <path
                        d="M50 50 L250 50 L280 100 L250 150 L50 150 L20 100 Z"
                        fill="currentColor"
                        opacity="0.1"
                        stroke="#FF8C42"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* City Markers */}
                    <div className="absolute top-8 left-16">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-charcoal ml-2">
                        Freetown
                      </span>
                    </div>
                    <div className="absolute top-20 right-20">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-charcoal ml-2">
                        Bo
                      </span>
                    </div>
                    <div className="absolute bottom-16 right-16">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-charcoal ml-2">
                        Kenema
                      </span>
                    </div>
                    <div className="absolute top-12 left-1/2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-charcoal ml-2">
                        Makeni
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="space-y-4">
            {coverageAreas.map((area, index) => (
              <div
                key={index}
                className="bg-light-gray rounded-2xl p-6 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 ${area.color} rounded-full`}></div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal text-lg">
                      {area.city}
                    </h3>
                    <p className="text-medium-gray text-sm">{area.status}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center space-x-2 text-sm text-medium-gray mb-1">
                    <Clock className="w-4 h-4" />
                    <span>{area.deliveryTime}</span>
                  </div>
                  {area.vendors > 0 && (
                    <div className="flex items-center space-x-2 text-sm text-green-800">
                      <MapPin className="w-4 h-4" />
                      <span>{area.vendors} vendors</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Promise */}
        <div className="text-center">
          <div className="bg-light-gray rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Truck className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                Our Delivery Promise
              </h3>

              <p className="text-lg text-medium-gray mb-8 leading-relaxed">
                We're committed to bringing fast, reliable delivery to every
                corner of Sierra Leone. Whether you're in the heart of Freetown
                or a remote village, Gladdy will reach you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    Same Day
                  </div>
                  <div className="text-medium-gray">Urban Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    Next Day
                  </div>
                  <div className="text-medium-gray">Provincial Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    2-3 Days
                  </div>
                  <div className="text-medium-gray">Rural Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicCoverage;
