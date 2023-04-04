const plantDiseases = [
    {
        name: "Apple___Apple_scab",
        title: "Apple Scab",
        description: "Apple scab is a fungal disease that commonly affects apple trees, causing dark spots on the leaves and fruit."
    },
    {
        name: "Apple___Black_rot",
        title: "Apple Black Rot",
        description: "Apple black rot is a fungal disease that can cause black, shriveled fruit and cankers on apple trees."
    },
    {
        name: "Apple___Cedar_apple_rust",
        title: "Cedar Apple Rust",
        description: "Cedar apple rust is a fungal disease that affects both cedar trees and apple trees, causing orange or brown spots on the leaves and fruit of apple trees."
    },
    {
        name: "Apple___healthy",
        title: "Healthy Apple",
        description: "Apples that are free from any visible disease or condition."
    },
    {
        name: "Blueberry___healthy",
        title: "Healthy Blueberry",
        description: "Blueberries that are free from any visible disease or condition."
    },
    {
        name: "Cherry_(including_sour)___healthy",
        title: "Healthy Cherry",
        description: "Cherries that are free from any visible disease or condition."
    },
    {
        name: "Cherry_(including_sour)___Powdery_mildew",
        title: "Cherry Powdery Mildew",
        description: "Cherry powdery mildew is a fungal disease that can cause white or gray powdery patches on the leaves and fruit of cherry trees."
    },
    {
        name: "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
        title: "Corn Cercospora Leaf Spot/Gray Leaf Spot",
        description: "Cercospora leaf spot and gray leaf spot are fungal diseases that can cause yellow or brown spots on the leaves of corn plants."
    },
    {
        name: "Corn_(maize)___Common_rust_",
        title: "Corn Common Rust",
        description: "Corn common rust is a fungal disease that can cause reddish-brown pustules on the leaves and stalks of corn plants."
    },
    {
        name: "Corn_(maize)___healthy",
        title: "Healthy Corn",
        description: "Corn plants that are free from any visible disease or condition."
    },
    {
        name: "Corn_(maize)___Northern_Leaf_Blight",
        title: "Corn Northern Leaf Blight",
        description: "Corn northern leaf blight is a fungal disease that can cause cigar-shaped lesions on the leaves of corn plants."
    },
    {
        name: "Grape___Black_rot",
        title: "Grape Black Rot",
        description: "Grape black rot is a fungal disease that can cause black, shriveled fruit and brown spots on the leaves of grapevines."
    },
    {
        name: "Grape___Esca_(Black_Measles)",
        title: "Grape Esca (Black Measles)",
        description: "Grape esca, also known as black measles, is a fungal disease that can cause brown streaks or spots on the leaves and fruit of grapevines."
    },
    {
        name: "Grape___healthy",
        title: "Healthy Grapevine",
        description: "This class represents a healthy grapevine without any visible symptoms of disease or stress. The leaves of a healthy grapevine are green and free from any spots, discoloration, or deformities. The grapes themselves are plump and evenly colored, without any signs of decay or rot. This class is important for comparison to the other classes that represent diseased grapevines, as well as for use as a baseline for machine learning algorithms to identify and differentiate between healthy and diseased grapevines."
    },
    {
        name: "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
        title: "Grape Leaf Blight (Isariopsis Leaf Spot)",
        description: "Grape leaf blight, also known as Isariopsis leaf spot, is a fungal disease that can cause yellow or brown spots on the leaves of grapevines."
    },
    {
        name: "Orange___Haunglongbing_(Citrus_greening)",
        title: "Orange Huanglongbing (Citrus Greening)",
        description: "Orange huanglongbing, also known as citrus greening, is a bacterial disease that can cause yellow shoots, misshapen fruit, and decline in orange trees."
    },
    {
        name: "Peach___Bacterial_spot",
        title: " Tomato Peach Bacterial Spot",
        description: "Peach bacterial spot is a bacterial disease that can cause dark spots on the leaves and fruit of peach trees."
    },
    {
        name: "Peach___healthy",
        title: "Healthy Peach",
        description: "Peaches that are free from any visible disease or condition."
    },
    {
        name: "Pepper,_bell___Bacterial_spot",
        title: "Bell Pepper Bacterial Spot",
        description: "Bell pepper bacterial spot is a bacterial disease that can cause water-soaked lesions on the leaves and fruit of bell pepper plants."
    },
    {
        name: "Pepper,_bell___healthy",
        title: "Healthy Bell Pepper",
        description: "Bell peppers that are free from any visible disease or condition."
    },
    {
        name: "Potato___Early_blight",
        title: "Potato Early Blight",
        description: "Potato early blight is a fungal disease that can cause brown spots on the leaves and stems of potato plants."
    },
    {
        name: "Potato___healthy",
        title: "Healthy Potato",
        description: "Potatoes that are free from any visible disease or condition."
    },
    {
        name: "Potato___Late_blight",
        title: "Potato Late Blight",
        description: "Potato late blight is a fungal disease that can cause dark lesions on the leaves, stems, and tubers of potato plants."
    },
    {
        name: "Raspberry___healthy",
        title: "Healthy Raspberry",
        description: "Raspberries that are free from any visible disease or condition."
    },
    {
        name: "Soybean___healthy",
        title: "Healthy Soybean",
        description: "Soybeans that are free from any visible disease or condition."
    },
    {
        name: "Squash___Powdery_mildew",
        title: "Squash Powdery Mildew",
        description: "Squash powdery mildew is a fungal disease that can cause white, powdery patches on the leaves and stems of squash plants."
    },
    {
        name: "Strawberry___healthy",
        title: "Healthy Strawberry",
        description: "Strawberries that are free from any visible disease or condition."
    },
    {
        name: "Strawberry___Leaf_scorch",
        title: "Strawberry Leaf Scorch",
        description: "Strawberry leaf scorch is a fungal disease that can cause brown or purplish blotches on the leaves of strawberry plants."
    },
    {
        name: "Tomato___Bacterial_spot",
        title: "Tomato Bacterial Spot",
        description: "Tomato bacterial spot is a bacterial disease that can cause brown or black spots on the leaves and fruit of tomato plants."
    }
];

export default plantDiseases