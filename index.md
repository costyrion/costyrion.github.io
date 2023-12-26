---
title: About
layout: default
nav_order: 1
permalink: /
---
# AI-Powered Cost Calculation Engine
{: .fs-9 }

Costyrion is a cost calculation engine crafted to streamline the implementation
and simplify the maintenance of costing methodologies, including ABC, GPK,
and RCA.
{: .fs-6 .fw-300 }

[Join the Community](/docs/community.html){: .btn .btn-blue .fs-5 .mb-4 .mb-md-0 .mr-2 }

---

## The Problem

In a world marked by global competition and rapid change, the importance of accurate and efficient costing has never been greater. Applying a higher costing maturity level requires adopting advanced costing methodologies and tools, that focus not only on enhancing accuracy but also on providing speed in delivering crucial information for decision-making and in responding to change requests.

Legacy software systems often fail to match the pace of modern business, especially when trying to implement real-time analytics on top of monolithic, period-focused accounting systems. The need to integrate this delayed financial data with operational data for cost calculations, coupled with the lack of interfaces for smooth integration, makes implementations and change requests both lengthy and costly.

In larger and more operationally diverse businesses, the complexity of the costing model, rules, and workflows for classifying and describing costs grows exponentially. Relying heavily on human input at such a scale leads to poor data quality and inconsistency. Additionally, implementing change requests for such complex rule systems and workflows becomes increasingly challenging, further compromising the system's reliability and adaptability.

Costing methodologies like ABC, GPK, RCA often fall short in real-world applications, not due to their logical principles, which can indeed offer value, but because they depend on outdated legacy software and poor design practices.

## The Solution


{: .note }
> The Costyrion project is currently in development. The below section presents a broader vision of the solution and may evolve accordingly.

Costyrion employs Event-Driven Architecture (EDA), a design paradigm centered around the exchange of events, which are notifications signaling a change in state or data. In this architecture, events are usually published by one component and consumed by another in real time. This approach is widely adopted in financial trading applications to disseminate time-sensitive information, allowing users to respond promptly and make timely decisions, such as reacting to a change in stock prices.

EDA is particularly valuable in financial sectors with stringent regulatory and auditing requirements. In this context, the European Union is pushing for adopting e-invoicing systems by mandating member countries to implement them. The ViDA project (VAT in the Digital Age) aims to make e-invoicing compulsory across all EU nations, with a significant objective to establish a transaction reporting system using e-invoices. This enables real-time VAT tax transaction reporting to the Tax Office.

The regulatory changes under ViDA present an opportunity for Costyrion to integrate directly with the continuous flow of invoices as they are issued. By augmenting this cost stream with AI for tasks like classification, Costyrion can significantly reduce the burden on systems traditionally dependent on complex rules and workflows where people in companies need to manually accept and classify costs. 

Distinct from the static nature of conventional accounting systems, Costyrion relies on events from source systems to gather financial and operational data in real time. It employs predictive analytics to dynamically forecast financial results, recalibrating as new data becomes available. Upon the stabilization of the state at the close of the accounting period, Costyrion synchronizes the data with the accounting books, ensuring both accuracy and a true reflection of the financial position. This synchronization not only validates the data but also lays the groundwork for future forecasts, permitting Costyrion to self-learn and continually refine its precision and operational efficiency.

![](../../assets/images/diagram.png)

## Key Features:

### Support for widely recognized cost calculation methodologies
Costyrion supports a range of widely recognized cost calculation methodologies, including Activity Based Costing (ABC), Grenzplankostenrechnung (GPK), and Resource Consumption Accounting (RCA). This comprehensive functionality allows for the creation and maintenance of detailed costing models, seamlessly integrating these models with data to deliver deep insights.

### AI-Driven Cost Allocation
Costyrion utilizes advanced machine learning algorithms to offer a smart and adaptive cost allocation solution that integrates seamlessly with established costing methodologies. This innovative approach aims to eliminate the need for complex rules and manual workflows typically required in traditional systems, where individuals in companies must manually accept and classify costs.

### Dynamic AI-Enhanced Predictive Analytics
Costyrion utilizes historical data and a current stream of events to dynamically predict financial outcomes, including detailed predictions related to the costing model. By continuously analyzing past and present data, Costyrion employs machine learning algorithms to forecast future financial scenarios with greater accuracy. This dynamic approach allows for real-time adjustments to predictions as new data becomes available, ensuring that the financial forecasts remain relevant and reliable.

### Real-Time Data Processing
Costyrion utilizes an event-driven architecture, effectively converting incoming data streams from source systems — both financial and operational — into an outgoing stream of enriched data that can be consumed by any reporting tool or Business Intelligence (BI) system in real-time.

### Scalability
Costyrion's event-driven architecture enables the system to scale and process vast volumes of data efficiently, accommodating growing data demands and complex processing needs with ease

### Reach API Integration Suite
Costyrion offers a comprehensive set of API options designed for extensive integration possibilities. It's built with the intention to act as an intermediary between source systems (financial and operational) and target reporting tools, ensuring natural and easy integration.

### Security and Reliability
Costyrion prioritizes security and reliability from the ground up. It's built using Rust, a type-safe language known for its performance and reliability, which minimizes common security vulnerabilities. Additionally, Costyrion carefully limits dependencies on external frameworks to reduce potential attack vectors and ensure stability.

### Cost-Efficient Performance
Engineered for high-efficiency calculations, Costyrion delivers robust performance at a low operational cost. It's designed to balance optimal performance with minimal resource utilization, ensuring cost-effective operations without compromising on speed or accuracy.

### Documentation and Support
Costyrion provides comprehensive documentation and benefits from a community support system, thanks to its open-source nature. Users have access to detailed guides and resources to help them effectively utilize the platform, along with a community-driven support network for additional assistance and shared knowledge.